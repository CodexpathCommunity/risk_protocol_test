import { useEffect } from 'react';

interface WebSocketEventMap {
  close: CloseEvent;
  error: Event;
  message: MessageEvent;
  open: Event;
}

type WebSocketEventHandler<K extends keyof WebSocketEventMap> = (event: WebSocketEventMap[K]) => void;

export function useWebSocket(url: string, onMessage: WebSocketEventHandler<'message'>) {
  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = (event) => {
      console.log('WebSocket connection opened');

        const subscriptionRequest = {
    type: 'subscribe',
    channel: 'orders',
    requestId: '123e4567-e89b-12d3-a456-426655440000',
  };
  socket.send(JSON.stringify(subscriptionRequest));
    };

    socket.onmessage = onMessage;

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = (event) => {
      console.log('WebSocket connection closed with code:', event.code);
    };

    return () => {
      socket.close();
    };
  }, [url, onMessage]);
}
