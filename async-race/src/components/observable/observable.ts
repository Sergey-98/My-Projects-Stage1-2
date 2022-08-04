type UpdateCallback<T> = (data: T) => void;

export const Observable = <T>(initialData: T) => {
  let data = initialData;
  const listeners = new Set<UpdateCallback<T>>();
  return {
    subscribe: (callback: UpdateCallback<T>) => {
      listeners.add(callback);
    },
    unsubscribe: (callback: UpdateCallback<T>) => {
      listeners.delete(callback);
    },
    update: (newValue: T) => {
      data = newValue;
      listeners.forEach((callback) => callback(data));
    },
    getValue: () => data
  };
};
