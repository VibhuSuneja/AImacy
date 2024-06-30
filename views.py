from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Patient, Prescription
from .serializers import PatientSerializer, PrescriptionSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class PrescriptionViewSet(viewsets.ModelViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer
