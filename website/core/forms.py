from django import forms

class ContactForm(forms.Form):
    first_name = forms.CharField(max_length=100, widget=forms.TextInput(attrs={
        'class': 'contact__input',
        'placeholder': ' ',
        'id': 'first_name',
    }))
    last_name = forms.CharField(max_length=100, widget=forms.TextInput(attrs={
        'class': 'contact__input',
        'placeholder': ' ',
        'id': 'last_name',
    }))
    email = forms.EmailField(widget=forms.EmailInput(attrs={
        'class': 'contact__input',
        'placeholder': ' ',
        'id': 'email',
    }))
    subject = forms.CharField(max_length=100, widget=forms.TextInput(attrs={
        'class': 'contact__input',
        'placeholder': ' ',
        'id': 'subject',
    }))
    message = forms.CharField(widget=forms.Textarea(attrs={
        'class': 'contact__input contact__textarea',
        'placeholder': ' ',
        'id': 'message',
    }))