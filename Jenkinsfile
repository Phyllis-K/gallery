def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]
pipeline{
    agent any
    environment {
        LIVE_SITE = "https://gallery-0q0c.onrender.com"
        RENDER_DEPLOY_HOOK = credentials('RENDER_DEPLOY_HOOK')
    }
    tools {
        nodejs "node23"
    }
    stages{
        stage( "fetch code from git"){
            steps {
                git branch:"master", url: "https://github.com/Phyllis-K/docker_workshop"
            }
        }
        stage ("installing npm") {
            steps{
                sh 'npm install'
            }
        }
        stage ("Test"){
            steps{
                sh "npm test"
            }
        }
        stage ("deploy to render"){
            steps{
                "script{
                    sh "curl -X POST ${RENDER_DEPLOY_HOOK}"
                }
            }
        }
    }
    post {
        always {
            slackSend(channel: '#phyllis-ip1',
            color: COLOR_MAP[currentBuild.currentResult],
            message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n live site at: ${LIVE_SITE}")"
            }
    }
}