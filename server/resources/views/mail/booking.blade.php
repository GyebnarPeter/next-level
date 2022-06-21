@component('mail::message')
# Kedves {{$name}}!
@component('mail::panel')
Foglalásod részleteit az alábbiakban olvashatod: <br>
<br>
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
Ez az üzenet egy másolat
@endcomponent
@component('mail::button', ['url' => 'http://localhost:3000'])
Weboldal megtekintése
@endcomponent
@endcomponent
