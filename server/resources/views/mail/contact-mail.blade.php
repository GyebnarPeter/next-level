@component('mail::message')
# Kedves {{$name}}!
@component('mail::button', ['url' => 'http://localhost:3000'])
Weboldal
@endcomponent
@component('mail::panel')
Köszönjük, hogy felvetted velünk a kapcsolatot! Hamarosan válaszolunk neked!
@endcomponent
@component('mail::subcopy')
Ez az üzenet egy másolat.
@endcomponent
@endcomponent

