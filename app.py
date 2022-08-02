import os
import requests
from flask import Flask, render_template, request, redirect, url_for, session, flash
from flask import *  
from flask_mail import *  
from random import *  
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re
import smtplib
from flask import Flask, request, make_response
import pyrebase


config = {
    "apiKey": "AIzaSyCGZtlEO7nMcNuRZ3H7YkhznQVnctJ_m8c",
    "authDomain": "certificatescape-e7ca7.firebaseapp.com",
    "projectId": "certificatescape-e7ca7",
    "storageBucket": "certificatescape-e7ca7.appspot.com",
    "messagingSenderId": "801688860458",
    "appId": "1:801688860458:web:671f8ccb033b2672f89053",
    "measurementId": "G-LRL3CWDFK0",
    "databaseURL": "your database url"
    
}

firebase = pyrebase.initialize_app(config)
storage = firebase.storage()

app = Flask(__name__)

app.config["MAIL_SERVER"]='smtp.gmail.com'  
app.config["MAIL_PORT"] = 465    
app.config["MAIL_USERNAME"] = 'certificatescape@gmail.com'  
app.config['MAIL_PASSWORD'] = 'czjj pmte kvdc abwf'  
app.config['MAIL_USE_TLS'] = False  
app.config['MAIL_USE_SSL'] = True  
otp = randint(000000,999999)  

#CLOUD SQL CREDENTIALS (FOR PRODUCTION, RESETS EVERY 5 HOURS)
#app.config['MYSQL_HOST'] = "34.172.191.180"
#app.config['MYSQL_USER'] = "test"
#app.config['MYSQL_PASSWORD'] = "test"
#app.config['MYSQL_DB'] = "test" 
#app.config["SECRET_KEY"] = "random secret key"

#REMOTESQL.COM CREDENTIALS (FORE TESTING PURPOSES, DOES NOT RESET)
app.config['MYSQL_HOST'] = "remotemysql.com"
app.config['MYSQL_USER'] = "ScuRX0z6Nb"
app.config['MYSQL_PASSWORD'] = "o6CJSRnS75"
app.config['MYSQL_DB'] = "ScuRX0z6Nb" 
app.config["SECRET_KEY"] = "random secret key"
mysql = MySQL(app)
mail = Mail(app)  


@app.route('/')
def index():
	return render_template('index.html')

@app.route('/register', methods =['GET', 'POST'])
def register():
    msg = ''
    if request.method == 'POST' :
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        auth = 0
        cursor = mysql.connection.cursor()
        cursor.execute('SELECT * FROM user WHERE username = % s', (username, ))
        account = cursor.fetchone()
        print(account)
        if account:
            msg = 'Account already exists !'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            msg = 'Invalid email address !'
        elif not re.match(r'[A-Za-z0-9]+', username):
            msg = 'name must contain only characters and numbers !'
        else:
            #url = "http://127.0.0.1:5001/?name="+username+"&recId="+email
            #requests.get(url)
            msg = 'You have successfully registered !'
            msg = Message('OTP',sender = 'certificatescape@gmail.com', recipients = [email])  
            msg.body = str(otp)  
            mail.send(msg)  
            ack = Message('Welcome!',sender = 'certificatescape@gmail.com', recipients = [email])
            ack.body = "Welcome to Certificatescape "+username+", kindly confirm your email ID by enrolling the One-Time Password sent to your account. Thank you!"
            mail.send(ack)  
            cursor.execute('INSERT INTO user VALUES (% s, % s, % s, % s)', (username, email,password, auth))
            mysql.connection.commit()
           
            return render_template('verify.html') 
    elif request.method == 'POST':
        msg = 'Please fill out the form !'
    return render_template('register.html', msg = msg)

@app.route('/registerr', methods =['GET', 'POST'])
def registerr():
    msg = ''
    if request.method == 'POST' :
        email = request.form['email']
        msg = Message('OTP',sender = 'certificatescape@gmail.com', recipients = [email])  
        msg.body = str(otp)  
        mail.send(msg)  
        return render_template('verifyy.html') 
    elif request.method == 'POST':
        msg = 'Please fill out the form !'
    return render_template('registerr.html', msg = msg)
 
    e
@app.route('/registerrr', methods =['GET', 'POST'])
def registerrr():
    msg = ''
    if request.method == 'POST' :
        email = request.form['email']
        password = request.form['password']       
        cursor = mysql.connection.cursor()
        cursor.execute('UPDATE user SET password = % s WHERE email = % s', (password,email))
        mysql.connection.commit()
        msg = "Password updated successfully!"
        return render_template('login.html', msg=msg)           
    elif request.method == 'POST':
        msg = 'Please fill out the form !'
    return render_template('registerrr.html', msg = msg)
    
@app.route('/validate',methods=["POST"])   
def validate():  
    user_otp = request.form['otp']  
    if otp == int(user_otp):       
         msg="Email verification successful"
         cursor = mysql.connection.cursor()
         auth = 1
         old = 0
         cursor.execute('UPDATE user SET auth = % s WHERE auth = % s', (auth,old))
         mysql.connection.commit()
         return render_template('login.html', msg = msg) 
    return "<h3>failure, OTP does not match</h3>"   
    
@app.route('/verifyy', methods =['GET', 'POST'])
def verifyyy():
    user_otp = request.form['otp']  
    if otp == int(user_otp):       
         msg="Email verification successful"

         return render_template('registerrr.html', msg=msg) 
    return "<h3>failure, OTP does not match</h3>"   

	
@app.route('/login',methods =['GET', 'POST'])
def login():
    global userid
    msg = ''
    if request.method == 'POST' :
        email = request.form['email']
        password = request.form['password']
        cursor = mysql.connection.cursor()
        cursor.execute('SELECT * FROM user WHERE email = % s AND password = % s', (email, password ))
        account = cursor.fetchone()
        print(account)
        print(account[-1])
        if account:
            if account[-1]==1:
                session['loggedin'] = True
                session['id'] = account[0]
                userid=  account[0]
                session['username'] = account[1]
         
                return render_template('dashboard.html')
                
            elif account[-1]==0:             
                msg = Message('OTP',sender = 'certificatescape@gmail.com', recipients = [email])  
                msg.body = str(otp)  
                mail.send(msg)   
                return render_template('verify.html') 

                    
        else:
            msg = 'Incorrect username / password !'
    return render_template('login.html', msg = msg)


@app.route('/dashboard')
def dashboard():
	return render_template('dashboard.html')


@app.route('/logout')
def logout():
	session.clear()
	flash('Successfully logged out', 'success')
	return redirect(url_for('index'))
    
    
@app.route('/selection')
def quiz():
    return render_template('selection.html')
    
@app.route('/gcp')
def quizz():
    return render_template('gcp.html')
    
@app.route('/aws')
def quizzz():
    return render_template('aws.html')
    
@app.route('/azure')
def quizzzz():
    return render_template('azure.html')
    
@app.route('/viewTestReport')
def viewTestReport():
    return render_template('viewTestReport.html')

    
@app.route('/gcpbasics')
def gcpbasics():
    return render_template('gcpbasics.html')
    
@app.route('/gcpinter')
def gcpinter():
    return render_template('gcpinter.html')
    
@app.route('/gcpadv')
def gcpadv():
    return render_template('gcpadv.html')
    
@app.route('/azurebasics')
def azurebasics():
    return render_template('azurebasics.html')
    
@app.route('/azureinter')
def azureinter():
    return render_template('azureinter.html')

@app.route('/azureadv')
def azureadv():
    return render_template('azureadv.html')
    
@app.route('/awsbasics')
def awsbasics():
    return render_template('awsbasics.html')
    
@app.route('/awsinter')
def awsinter():
    return render_template('awsinter.html')
    
@app.route('/awsadv')
def awsadv():
    return render_template('awsadv.html') 
    


@app.route('/navigationError')
def navigationError():
    return render_template('navigationError.html')     


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0",port=port, debug=True)