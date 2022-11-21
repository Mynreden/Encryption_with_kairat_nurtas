from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.forms import UsernameField

from django import forms


class UserLoginForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super(UserLoginForm, self).__init__(*args, **kwargs)

    username = UsernameField(widget=forms.TextInput(
        attrs={'class': 'form-control',
               'placeholder': 'Username',
               'id': 'hello',
               'background-color': '#224957',
               'color': 'white',
               }
    ))
    password = forms.CharField(widget=forms.PasswordInput(
        attrs={
            'class': 'form-control',
            'placeholder': 'Password',
            'id': 'hi',
        }
))

class UserLogupForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super(UserLogupForm, self).__init__(*args, **kwargs)

    username = UsernameField(widget=forms.TextInput(
        attrs={'class': 'form-control',
               'placeholder': 'Username',
               'id': 'hello',
               'background-color': '#224957',
               'color': 'white',
               }
    ))
    password1 = forms.CharField(widget=forms.PasswordInput(
        attrs={
            'class': 'form-control',
            'placeholder': 'Password',
            'id': 'hi',
        }
    ))
    password2 = forms.CharField(widget=forms.PasswordInput(
        attrs={
            'class': 'form-control',
            'placeholder': 'Confirm password',
            'id': 'hi',
        }
    ))
