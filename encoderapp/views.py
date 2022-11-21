from django.shortcuts import render, redirect
from django.http import HttpResponse
# Create your views here.
def index(request):
    return redirect('/encoder/caesar_cipher')

def caesarCipher(request):
    return render(request, 'encoderapp/caesarcipher.html')

def vigenereCipher(request):
    return render(request, 'encoderapp/vigenerecipher.html')

def keyCipher(request):
    return render(request, 'encoderapp/publicprivatekey.html')

def kairat(request):
    return render(request, 'encoderapp/kairatNurtas.html')
