# Generated by Django 4.0.4 on 2022-04-26 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('download', '0002_filesadmin_delete_downloads'),
    ]

    operations = [
        migrations.AddField(
            model_name='filesadmin',
            name='downloadooption',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
    ]