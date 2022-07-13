@component('mail::message')
# Kedves {{$name}}!
@component('mail::panel')
Köszönjük, hogy felvetted velünk a kapcsolatot! Hamarosan válaszolunk neked!
@endcomponent
@component('mail::subcopy')
Ez az üzenet egy másolat.
@endcomponent
@component('mail::button', ['url' => 'https://www.next-level.hu'])
Látogass el weboldalunkra
@endcomponent
@endcomponent

