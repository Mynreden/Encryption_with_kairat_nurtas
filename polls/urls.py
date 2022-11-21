from django.urls import path
from . import views

urlpatterns = [path('', views.index, name = 'index'),

               path('signout/', views.signout, name='signout'),
               path('log/', views.mylogin, name='log'),
               path('registration/', views.registr, name='registr')]
