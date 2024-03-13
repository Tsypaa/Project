from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

def index(request):
    return render(request, 'main/layout.html')

def hello(request):
    return render(request, 'main/index.html')

def analyst(request):
    return render(request, 'main/anal.html')
