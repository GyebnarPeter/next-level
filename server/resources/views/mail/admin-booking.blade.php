@component('mail::message')
# Kedves Next Level! Az alábbi foglalás érkezett!
@component('mail::panel')
Név: {{$name}} <br>
Létszám: {{$person}} <br>
Email: {{$email}} <br>
Telefonszám: {{$phone}} <br>
Fizetési mód: {{$payment}} <br>
Számlás: {{$bill}} <br>
Időpont: {{$from_time}} <br>
Játék: {{$game}} <br>
@endcomponent
@component('mail::subcopy')
{{$email}}
@endcomponent
@endcomponent
