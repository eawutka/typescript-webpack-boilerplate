import Guid from './lib/guid'

class Startup {
    public static main(): number {
        console.log(Guid())
        return 0
    }
}

Startup.main()