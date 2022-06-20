@component('mail::message')
# Kedves Next Level! Az alábbi kérdés érkezett! Ettől: {{$name}}
@component('mail::panel')
{{$body}}
@endcomponent
@component('mail::subcopy')
{{$email}}
@endcomponent
@endcomponent

