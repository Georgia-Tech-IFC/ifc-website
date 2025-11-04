# GT IFC Website
## Run Locally
1. make sure python is installed properly
2. create and activate a python virtual environment
3. run ```pip install -r requirements.txt``` to install necessary dependencies
4. create a ```.env``` file and set up a ```DJANGO_SECRET``` variable with the proper secret
5. navigate to ```website/``` and run ```python3 manage.py runserver```

## Push New Version to Server
1. Log into to digital ocean 
2. Navigate to the ubuntu server and go to “console” in the top right
3. Run “cat README.md” then follow the commands from there
