pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' // This should match your NodeJS installation name in Jenkins
    }
    
    environment {
        NODE_ENV = 'test'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from Git...'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'npm start'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline finished!'
        }
        success {
            echo 'Pipeline succeeded! 🎉'
        }
        failure {
            echo 'Pipeline failed! ❌'
        }
    }
}