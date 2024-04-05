from django.db import models

# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=15)
    slug = models.SlugField(max_length=15)
    ordering = models.IntegerField(default=0)

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Categories'
        verbose_name_plural = 'Categories'
        ordering = ('ordering',)

    def __str__(self):
        return self.title

class Client(models.Model):
    category = models.ForeignKey(Category, related_name='clients', on_delete=models.CASCADE)
    title = models.CharField(max_length=15)
    slug = models.SlugField(max_length=15)
    weighting_type = models.CharField(max_length=30)

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Clients'
        verbose_name_plural = 'Clients'
        ordering = ('title',)

    def __str__(self):
        return f"Name: {self.title} / Category: {self.category}"
