const development = {
    name: 'develpoment',
    asset_path: './assets',
    session_cookie_key: 'blashsomething',
    db: 'codeial-db',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'email here',
            pass: 'password here'
        }
    },

    google_client_id: '896291689405-mqe6pgefifjhbv600q3sqctdm6o4ncig.apps.googleusercontent.com',
    google_client_secret: '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',
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret:'codeial'
}



const production = {
    name: 'production'
}


module.exports = development;