# Generated by Django 3.2 on 2022-11-30 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('erd_microsvc', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='mobile_no',
            field=models.BigIntegerField(),
        ),
    ]
