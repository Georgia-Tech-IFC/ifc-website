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

def submit_contact(request):
    if request.method == 'POST':
        print(request.POST)

    return HttpResponse("OK", status=200)


def submit_contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            # Process form data (e.g., save to database, send email, etc.)
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            print(first_name)
            print(last_name)
            print(email)
            print(subject)
            print(message)

            return JsonResponse({'status': 'success', 'message': 'Message submitted.'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid data submitted.'}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request method.'}, status=405)
