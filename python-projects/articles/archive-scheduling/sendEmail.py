import smtplib
import ssl

smtpServer = 'localhost'
port = 1025
sender = 'me@localhost.com'
receiver = 'receiver@localhost.com'
message = 'this is a test email.'

with smtplib.SMTP('localhost', port=port) as server:
    server.sendmail(sender, receiver, message)
