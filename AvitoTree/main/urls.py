from django.urls import path
from .views import index, hello, analyst


urlpatterns = [
    path('user/', index),
    path('', hello),
    path('analyst/', analyst)
]