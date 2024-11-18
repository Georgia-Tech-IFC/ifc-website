from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def chapters(request):
    return render(request, 'chapters.html')


def purpose(request):
    return render(request, 'purpose.html')


def exec(request):
    return render(request, 'exec.html')


def cookies_policy(request):
    return render(request, 'cookies_policy.html')


def rush(request):
    return render(request, 'rush.html')
