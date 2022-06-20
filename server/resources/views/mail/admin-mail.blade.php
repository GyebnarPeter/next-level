@component('mail::message')
# Kedves Next Level! Az alábbi kérdés érkezett! Ettől: {{$name}}
@component('mail::panel')
{{$message}}
@endcomponent
@component('mail::subcopy')
{{$email}}
@endcomponent
@endcomponent

