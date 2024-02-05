export function HandleErrors(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function(...args: any[]) {
            const req = args[0];
            const res = args[1];
            try {
                return await originalMethod.apply(this, args);
            } catch (e: unknown) {
                console.error(e);
                const { message } = e as Error;
                res.status(400).json({ error: message });
            }
        };

        return descriptor;
    };
    
}