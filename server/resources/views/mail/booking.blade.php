@component('mail::message')
# Kedves {{$name}}!
@component('mail::panel')
Foglalásod részleteit az alábbiakban olvashatod: <br>
<br>
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
@endswitch
Időpont: {{$from_date}} <br>
Játék: {{$game}} <br>
@endcomponent
@component('mail::subcopy')
Ez az üzenet egy másolat
@endcomponent
@component('mail::button', ['url' => 'http://localhost:3000'])
Weboldal megtekintése
@endcomponent
@endcomponent
