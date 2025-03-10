from django.shortcuts import render
from django.http import JsonResponse
from .forms import ContactForm


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


def for_parents(request):
    return render(request, 'for_parents.html')


def ifc_philanthropy(request):
    return render(request, 'ifc_philanthropy.html')


def chapter_philanthropy(request):
    return render(request, 'chapter_philanthropy.html')
