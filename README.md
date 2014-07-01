This is AngularF1 demo
Not a Node js based project.
Installation

    
Add the Virtual host in your Apache (lets say xapp or wamp) and configure the path of the project accordingly.

    <VirtualHost *:80>
     ServerName angularAuth.net
     DocumentRoot "D:/Angular_Work_Space/angularAuth/app" #change here
        DirectoryIndex index.html
        <Directory "D:/Angular_Work_Space/angularAuth/app"> #change here
            AllowOverride All
            Allow from All
        </Directory>
    </VirtualHost>

Note : If you want to give different host name, instead of angularAuth.net, Then you will have to this steps.

    Register the app in Facebook and replace the API key in the app.js, 
    
    $facebookProvider.setAppId('XXXXXXXXXXXXXXXXX');
