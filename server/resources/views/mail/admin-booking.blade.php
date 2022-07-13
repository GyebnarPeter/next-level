@component('mail::message')
# Kedves Next Level! Az alábbi foglalás érkezett!
@component('mail::panel')
Név: {{$name}} <br>
Létszám: {{$person}} <br>
Email: {{$email}} <br>
Telefonszám: {{$phone}} <br>
@switch($bill)
@case(0)
Számlás: Nem <br>
@break
@case(1)
Számlás: Igen <br>
<br>
Számlázási adatok:<br>
Név: {{$bill_name}}<br>
Cím: {{$bill_address}}<br>
Email: {{$bill_email}}<br>
Telefonszám: {{$bill_phone}}<br>
@endswitch
<br>
Időpont: {{$from_date}} <br>
Játék: {{$game}} <br>
@endcomponent
@component('mail::subcopy')
{{$email}}
@endcomponent
@endcomponent
