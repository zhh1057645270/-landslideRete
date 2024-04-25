import { InjectionKey, Ref } from 'vue';

export const provideKeys = {
	MITT_EVENT: Symbol('MITT_EVENT') as InjectionKey<Ref<string>>,
};
