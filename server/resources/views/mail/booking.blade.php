@component('mail::message')
# Kedves {{$name}}!
@component('mail::button', ['url' => 'http://localhost:3000'])
Weboldal
@endcomponent
@component('mail::panel')
Foglalásod részleteit az alábbiakban olvashatod:
Név: {{$name}}
Létszám: {{$person}}
Időpont: {{$time}}
@endcomponent
@component('mail::subcopy')
Ez az üzenet egy másolat
@endcomponent
@endcomponent
