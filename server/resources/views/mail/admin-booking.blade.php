@component('mail::message')
# Kedves Next Level! Az alábbi foglalás érkezett!
@component('mail::panel')
Név: {{$name}}
Létszám: {{$person}}
Email: {{$email}}
Időpont: {{$time}}
@endcomponent
@component('mail::subcopy')
{{$email}}
@endcomponent
@endcomponent
