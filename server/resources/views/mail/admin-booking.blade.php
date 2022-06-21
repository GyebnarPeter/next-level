@component('mail::message')
# Kedves Next Level! Az alábbi foglalás érkezett!
@component('mail::panel')
Név: {{$name}} <br>
Létszám: {{$person}} <br>
Email: {{$email}} <br>
Telefonszám: {{$phone}} <br>
Fizetési mód: {{$payment}} <br>
@switch($bill)
@case(0)
Számlás: Nem <br>
@break
@case(1)
Számlás: Igen <br>
@endswitch
Időpont: {{$from_date}} <br>
Játék: {{$game}} <br>
@endcomponent
@component('mail::subcopy')
{{$email}}
@endcomponent
@endcomponent
