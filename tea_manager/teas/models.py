from django.db import models

class Tea(models.Model):
  name = models.CharField(max_length=100)
  description = models.TextField(max_length=250)
  image = models.FileField(upload_to='images/', blank=True, null=True)
