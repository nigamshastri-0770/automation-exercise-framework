pipeline {

    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/nigamshastri-0770/automation-exercise-framework.git'
            }
        }

        stage('Install Node Modules') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {

        always {

            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true

            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
        }

        success {
            echo 'Playwright Tests Passed Successfully'
        }

        failure {
            echo 'Playwright Tests Failed'
        }
    }
}