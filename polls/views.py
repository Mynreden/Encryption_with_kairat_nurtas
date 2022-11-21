from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate,login, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from polls.forms import UserLoginForm, UserLogupForm

# Create your views here.

def index(request):
    if request.user.is_authenticated:
        print('VSE OK')
        return redirect('/encoder')
    return redirect('/log')

def mylogin(request):
    if request.user.is_authenticated:
        print('VSE OK')
        return redirect('/encoder')

    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username = username, password = password)
        if user is not None:
            login(request, user)
            return redirect('/encoder')
        else:
            form = UserLoginForm()
            return render(request, 'polls/login.html', {'form': form})
    else:
        form = UserLoginForm()
        return render(request, 'polls/login.html', {'form': form})

def registr(request):
    if request.user.is_authenticated:
        return redirect('/encoder')

    if request.method == 'POST':
        form = UserLogupForm(request.POST)

        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username = username,password = password)
            login(request, user)
            return redirect('/encoder')
        else:
            return render(request,'polls/registration.html',{'form':form})
    else:
        form = UserLogupForm()
        return render(request, 'polls/registration.html', {'form': form})

def signout(request):
    logout(request)
    return redirect('/log')

