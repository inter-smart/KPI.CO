pipeline {
    agent { label getAgentLabel() }
    environment {
        AWS_ACCOUNT_ID = "016222040435"
        AWS_DEFAULT_REGION = "ap-south-1"
        IMAGE_NAME = "kpi-website"
        REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_NAME}"
        DEPLOY_TAG = "${GIT_BRANCH}_${GIT_COMMIT}"
        PREV_DEPLOY_IMAGE="${REPOSITORY_URI}:${GIT_BRANCH}_${GIT_PREVIOUS_COMMIT}"
        CONTAINER_IMAGE = "${REPOSITORY_URI}:${DEPLOY_TAG}"
        DEPLOY_IMAGE="${REPOSITORY_URI}:${GIT_BRANCH}"
     }
   
    stages {

        stage('Check Branch') {
            steps {
                script {
                    echo "Using agent label: ${getAgentLabel()}"
                    echo "Branch Name: ${env.GIT_BRANCH}"
                }
            }
        }
      
        // Logging into AWS ECR
        stage('Logging into AWS ECR') {
            steps {
                script {
                    sh "aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com"
                }
            }
        }

        // Building Docker images for Development
        stage('Building image for development') {
            when {
                branch 'development'
                }
            steps {
                dir('.') {
                        sh "docker build -t ${IMAGE_NAME}:${GIT_BRANCH} --build-arg BUILD_ENV=development ."
                        sh '''mkdir /var/jenkins/kpi.co-website || \\true'''
                    }
                    
                }
            }
        }

        // Pushing to ECR
        stage('Pushing to ECR') {
            steps {
                script {
                    sh "docker tag ${IMAGE_NAME}:${GIT_BRANCH} ${CONTAINER_IMAGE}"
                    sh "docker tag ${IMAGE_NAME}:${GIT_BRANCH} ${DEPLOY_IMAGE}"
                    sh "docker push ${CONTAINER_IMAGE}"
                    sh "docker push ${DEPLOY_IMAGE}"
                }
            }
        }
        // Deployment
        stage('Deploy Development') {
           when {
                branch 'development'
                }
            steps {
                    dir("${env.WORKSPACE}/devops") {
                    sh '''/bin/bash deploy.sh kpi.co-website ${GIT_BRANCH}'''
                    }
                    sh '''docker rmi ${PREV_DEPLOY_IMAGE} || true'''
            }
        }
        
    }
    post {
        // Clean after build
        always {
          cleanWs()
        }
        
    }
}

//Configure Agent
def getAgentLabel() {
    if (env.BRANCH_NAME == 'development') {
        return 'kpi.co-website-development'
    }
}
