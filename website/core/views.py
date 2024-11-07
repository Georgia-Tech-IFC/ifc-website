from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def chapters(request):
    return render(request, 'chapters.html')
