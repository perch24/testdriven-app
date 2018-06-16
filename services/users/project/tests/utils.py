import json

from project import db
from project.api.models import User


def add_user(username="test", email="test@example.org", password="somepassword"):
    user = User(username=username, email=email, password=password)
    db.session.add(user)
    db.session.commit()
    return user


def login_user(client, user):
    resp_login = client.post(
        '/auth/login',
        data=json.dumps({
            'email': user.email,
            'password': user.password
        }),
        content_type='application/json'
    )
    return json.loads(resp_login.data.decode())['auth_token']
