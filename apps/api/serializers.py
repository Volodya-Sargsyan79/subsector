from rest_framework import serializers

from apps.client.models import Client, Category

class ClientSerializer(serializers.ModelSerializer):
  class Meta:
    model = Client
    fields = ('id', 'category', 'title', 'slug', 'weighting_type')

class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = ('id', 'title', 'slug', 'ordering')

