pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/Kani112a/my-devops-app.git'
            }
        }

       stage('Build Docker Image') {
    steps {
        sh 'sudo docker build -t my-devops-app .'
    }
}

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker tag my-devops-app $DOCKER_USER/my-devops-app
                        docker push $DOCKER_USER/my-devops-app
                    '''
                }
            }
        }
    }
}
