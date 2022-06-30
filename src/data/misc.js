export const OPCODES = {
        INFO: 0,
        HELLO: 1,
        INIT: 2,
        HEARTBEAT: 3,
};

export function logEvent (message) {
        console.log(
                `%cWebsocket%c <~ ${message}`,
                'background-color: #9f84db; border-radius: 5px; padding: 3px; color: #372910;',
                'background: none; color: #9f84db;'
        );
}

export function timestampsToPrecents(start, end) {
        const date = new Date().getTime();
  
        const x = end - start;
        const y = date - start;
  
        var prcnt = y / x * 100;
  
        var prccc = Math.round((prcnt + Number.EPSILON) * 100) / 100;
  
        var width = prccc + "%";
        return width;
}