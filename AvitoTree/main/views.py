from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    local_names = ["Россия", "Турция",
                    "Индия", "Америка"]
    return render(request, 'main/layout.html', {'local_names': local_names})

