from django.urls import path
from . import views

urlpatterns = [path('', views.index, name = 'index'),
               path('caesar_cipher/', views.caesarCipher, name = 'caesar cipher'),
               path('vigenere_cipher/', views.vigenereCipher, name = 'vigenere cipher'),
               path('keys/', views.keyCipher, name = 'public private keys'),
               path('kairat_nurtas/', views.kairat, name='kairat nurtas')]
