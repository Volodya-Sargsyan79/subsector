import json

from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.db.models import Q

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import ClientSerializer, CategorySerializer

from apps.client.models import Client, Category

class CategoryView(generics.ListAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer