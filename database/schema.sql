-- This script will delete everything created in `schema.sql`. This script is
-- also idempotent, you can run it as many times as you would like. Nothing
-- will be dropped if the schema does not exist.

drop schema if exists people cascade;

drop table if exists people.person;

create schema people;

create table people.person(
	id 				serial primary key,
	first_name 		text not null check (char_length(first_name) < 80),
	color			text not null check (char_length(color) < 80),
	created_on 		timestamp default now(),
	updated_on      timestamp default now()
);

comment on table people.person is 'A person in the interview question.';
comment on column people.person.id is 'The primary unique identifier for the person.';
comment on column people.person.first_name is 'The person’s first name';
comment on column people.person.color is 'The person’s color.';
comment on column people.person.created_on is 'The time this person was created.';
comment on column people.person.updated_on is 'The time this person was updated.';
