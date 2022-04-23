from unittest import mock
from django.db import models

# Create your models here.





class FilesAdmin(models.Model):
    adminupload=models.FileField(upload_to='media')
    title=models.CharField(max_length=60)

    def __str__(self) :
        return self.title