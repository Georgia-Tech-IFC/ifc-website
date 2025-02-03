from django.urls import path
from .views import *


urlpatterns = [
    path('', index),
    path('chapters', chapters),
    path('purpose', purpose),
    path('exec', exec),
    path('rush', rush),
    path('for-parents', for_parents)
]