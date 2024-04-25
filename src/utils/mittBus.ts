import mitt from 'mitt';
type Events = {
	TEST_EVENT: { key: string; value: string };
	bar?: number;
};

export const mittBus = mitt<Events>();
